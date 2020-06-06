export default function handleDate(time = Date.now()){
  const target = new Date(time);
  target.setHours(0);
  target.setMinutes(0);
  target.setSeconds(0);
  target.setMilliseconds(0);
  return target.getTime();
}
