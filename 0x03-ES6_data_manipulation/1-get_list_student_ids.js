export default function getListStudentIds(arg) {
  if (!Array.isArray(arg) || arg.every((e) => typeof e !== 'object')) {
    return [];
  }
  const newArrayOfIds = arg.map((e) => e.id);
  return newArrayOfIds;
}
