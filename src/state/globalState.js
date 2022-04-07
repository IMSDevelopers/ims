import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({

    // By default, the user is not an admin; true = admin, false = generic user
    userState: false,
});

export { useGlobalState, setGlobalState };