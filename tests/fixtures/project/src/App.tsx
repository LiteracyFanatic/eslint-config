import { useEffect } from 'react';

// react: improper hooks usage should trigger
export default function App() {
    if (Math.random() > 2) {
        // calling a hook conditionally violates react-hooks/rules-of-hooks
        useEffect(() => {});
    }
    return null;
}
