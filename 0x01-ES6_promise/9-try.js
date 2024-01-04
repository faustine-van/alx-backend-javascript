export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const n = mathFunction();
    queue.push(n);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
