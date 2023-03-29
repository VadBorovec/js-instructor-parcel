// Напиши скрипт проверки подписки пользователя при доступе к контенту
// - Есть три типа подписки: free, pro и vip.
// - Получить доступ могут только пользователи pro и vip

const sub = 'pro';

 const canAccessContent = sub === 'pro' || sub === 'vip';
console.log('Есть доступ K контенту? ', canAccessContent);
