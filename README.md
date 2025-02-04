# React Native Unmounted Component Error

This repository demonstrates a common error in React Native applications: the "Cannot update a component that is not mounted" error during asynchronous data fetching.  The error arises when a component unmounts before an asynchronous operation (like a fetch request) completes and attempts to update its state.  This repo contains two files, `bug.js` which shows the problematic code and `bugSolution.js` which demonstrates how to solve it.

## Bug
The `bug.js` file shows a component that fetches data asynchronously using `useEffect` and `fetch`.  If the component unmounts before the `fetch` completes, updating the state will throw an error.

## Solution
The `bugSolution.js` file provides a solution using the `useIsMounted` hook.  This hook prevents state updates after the component unmounts.