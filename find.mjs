import * as h from '@hugeicons/core-free-icons';
const keys = Object.keys(h);
const mailsend = keys.filter(k => k.toLowerCase().includes('mailsend'));
const send = keys.filter(k => k.toLowerCase() === 'send' || k.toLowerCase() === 'sendmail' || k.toLowerCase().includes('mailsend'));
console.log('mailsend:', mailsend.slice(0,8).join(', '));
console.log('send exact:', send.join(', '));
