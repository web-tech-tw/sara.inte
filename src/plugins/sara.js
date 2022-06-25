"use strict";

import Vue from "vue";
import axios from "axios";

import {
    SARA_TOKEN_KEY_NAME,
} from "@/const"

const config = {
    baseURL: process.env.VUE_APP_SARA_RECV_HOST,
    timeout: 60 * 1000,
};

const _client = axios.create(config);

_client.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem(SARA_TOKEN_KEY_NAME);
        if (token) {
            config.headers["Authorization"] = `SARA ${token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

_client.interceptors.response.use(
    function (response) {
        if ("sara-issue" in response?.headers) {
            localStorage.setItem(
                SARA_TOKEN_KEY_NAME,
                response.headers["sara-issue"]
            );
        }
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

const extension = {
    install: (Vue) => {
        Vue.prototype.$sara = _client;
        Vue.prototype.$profile = async () => {
            if (!localStorage.getItem(SARA_TOKEN_KEY_NAME)) return null;
            try {
                const xhr = await _client.get('profile');
                return xhr?.data?.profile || false;
            } catch (e) {
                if (e?.response?.status === 401) {
                    localStorage.removeItem(SARA_TOKEN_KEY_NAME);
                    location.reload();
                }
                return false;
            }
        }
    }
}

Vue.use(extension)

export default extension;
