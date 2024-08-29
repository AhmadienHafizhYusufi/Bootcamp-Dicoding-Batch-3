function fibRecursive(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function fibonacci(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }

  const fibSequence = [];

  function buildSequence(i) {
    if (i > n) return;
    fibSequence.push(fibRecursive(i));
    buildSequence(i + 1);
  }

  buildSequence(0);

  return fibSequence;
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
