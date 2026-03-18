document.addEventListener('DOMContentLoaded', function () {
	const content_adbar = document.getElementById('content_adbar');
	content_adbar.innerHTML = content_adbar.innerHTML + content_adbar.innerHTML;

	const faqItems = document.querySelectorAll('.faq-item');
	faqItems.forEach((item) => {
		const question = item.querySelector('.faq-question');
		question.addEventListener('click', () => {
			faqItems.forEach((otherItem) => {
				if (otherItem !== item) {
					otherItem.classList.remove('active');
				}
			});
			const answer = item.querySelector('.faq-answer');
			if (answer.scrollHeight > 200) {
				answer.style.overflowY = 'auto';
			}
			item.classList.toggle('active');
		});
	});
	const number = '573228608238';
	const message = '¡Hola! 👋 ¿Me puedes enviar información y disponibilidad?';
	const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
	document.querySelectorAll('.cta-btn').forEach((btn) => {
		btn.href = url;
	});
});
