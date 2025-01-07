// src/Api/Api.js

import axios from "axios";
import { useMemo } from "react";

const API_BASE_URL = "http://localhost:8080";

// Функція для отримання ракет з фільтрами
export const fetchRockets = (filters = {}) => {
  return axios.get(`${API_BASE_URL}/rockets`, {
    params: filters,
  });
};
