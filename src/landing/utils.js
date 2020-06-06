export async function timeout(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

