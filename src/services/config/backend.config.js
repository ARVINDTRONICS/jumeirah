import axios from "axios";

const BackendInstance = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 60000
});

BackendInstance.interceptors.response.use(
  (res) => handleSuccess(res),
  (err) => handleError(err)
);

function handleSuccess(response) {
  return { status: response.status, data: response.data };
}

const handleError = (error) => {
  return { status: 400, date: error };
};

const BackendService = function (options) {
  return BackendInstance(options);
};

export default BackendService;
