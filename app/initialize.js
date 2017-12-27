import mainFn from './scripts/main';

// we offload mainFn to another file to keep this entry point as clean as possible
document.addEventListener('DOMContentLoaded', mainFn);
