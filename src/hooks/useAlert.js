import React, { useState } from 'react'

// Custom hooks are functions that use React's built-in hooks (useState, useEffect, etc.) 
// or other custom hooks to perform specific tasks.
// They can manage side effects (data fetching, subscriptions), manage state, 
// or perform other reusable logic.
const useAlert = () => {
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

    const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
    const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

    // Hooks dont return any jsx they either pass object or an array to which you can pass 
    // All of these values such as mentioned below.
    return { alert, showAlert, hideAlert };
}

export default useAlert