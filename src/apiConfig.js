let apiUrl 

const apiUrls = {
  production: "https://mernguide-ecomm-backend.herokuapp.com", 
  development: "http://localhost:5000"
}

if (window.location.host === 'localhost:3000') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl