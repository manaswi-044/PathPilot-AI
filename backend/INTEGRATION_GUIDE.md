# 🚀 PathPilot AI Integration Guide

Welcome to the **PathPilot AI** developer guide. This document outlines the technical workflow for all team members to ensure seamless integration between the Next.js frontend, FastAPI backend, Supabase Auth, and Gemini AI.

---

## 🏗 Backend Architecture (Clean Architecture)
The backend is structured to separate concerns and prevent circular dependencies:
- **`app/api/`**: Route handlers, request validation, and response formatting.
- **`app/services/`**: Core business logic. AI engine calls happen here.
- **`app/models/`**: SQLAlchemy database schemas.
- **`app/schemas/`**: Pydantic models for strict data validation.
- **`app/core/`**: Centralized config, security, and logging.

---

## 🔐 Authentication Flow (Member 1)
We use **Supabase Auth** for identity management and **JWT (JSON Web Tokens)** for securing our FastAPI endpoints.

1. **Frontend**: User signs in via Supabase Auth.
2. **Frontend**: Retrieve the `access_token` (JWT) from the Supabase session.
3. **Backend**: Send the token in the header: `Authorization: Bearer <token>`.
4. **Backend**: `app/api/deps.py` verifies the token using the `JWT_SECRET`.

**Frontend Example (Axios Interceptor):**
```javascript
import axios from 'axios';
import { supabase } from './supabaseClient';

const api = axios.create({ baseURL: 'http://localhost:8000/api' });

api.interceptors.request.use(async (config) => {
  const { data } = await supabase.auth.getSession();
  if (data.session?.access_token) {
    config.headers.Authorization = `Bearer ${data.session.access_token}`;
  }
  return config;
});