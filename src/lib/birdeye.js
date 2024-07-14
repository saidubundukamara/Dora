// src/lib/birdeyeService.js
import axios from "axios";

const API_KEY = "8f3404af4c904fd592dad198ac60351e";
const BASE_URL = "https://api.birdeye.so";

const birdeyeService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
    },
});

// @ts-ignore
export const getBusinessReviews = async (businessId) => {
    try {
        const response = await birdeyeService.get(`/v1/review/business/${businessId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
    }
};
