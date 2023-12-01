// scrollanimation.ts
// export const scrollAnimation = {
//     beforeMount(el: Element) {
//         el.classList.add('before-animation');
//         const observer = new IntersectionObserver((entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('start-animation');
//                     observer.unobserve(entry.target);
//                 }
//             });
//         });
//         observer.observe(el);
//     }
// };