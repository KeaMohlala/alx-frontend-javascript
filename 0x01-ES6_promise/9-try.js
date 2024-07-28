export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const mathResult = mathFunction();
    queue.push(mathResult, 'Guardrail was processed');
  } catch (error) {
    queue.push(`Error: ${error.message}`, 'Guardrail was processed');
  }
  return queue;
}
