const config = window.APP_CONFIG || {
  booking: { airbnb: '', gathern: '' },
  galleryDriveUrl: '',
  locationUrl: '',
  whatsappNumber: '971500000000',
};
const modal = document.querySelector('.modal');
const toast = document.querySelector('.toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

function openModal() {
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function configuredLink(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function whatsappLink(message) {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('[data-open-booking]').forEach((button) => button.addEventListener('click', openModal));
document.querySelectorAll('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});

document.querySelectorAll('[data-platform]').forEach((link) => {
  const platform = link.dataset.platform;
  const url = config.booking?.[platform] || '';
  if (configuredLink(url)) {
    link.href = url;
  } else {
    link.href = '#';
    link.addEventListener('click', (event) => {
      event.preventDefault();
      showToast(`أضف رابط ${platform === 'airbnb' ? 'Airbnb' : 'جاذر'} داخل ملف config.js أولًا.`);
    });
  }
});

document.querySelectorAll('[data-action]').forEach((button) => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action === 'gallery') {
      if (configuredLink(config.galleryDriveUrl)) {
        window.open(config.galleryDriveUrl, '_blank', 'noopener,noreferrer');
      } else {
        showToast('أضف رابط Google Drive للصور داخل ملف config.js أولًا.');
      }
      return;
    }
    if (action === 'location') {
      if (configuredLink(config.locationUrl)) {
        window.open(config.locationUrl, '_blank', 'noopener,noreferrer');
      } else {
        showToast('أضف رابط موقع الشقة داخل ملف config.js أولًا.');
      }
    }
  });
});

document.querySelectorAll('[data-whatsapp-link]').forEach((link) => {
  link.href = whatsappLink('مرحبًا، أرغب بالاستفسار عن الشقة اليومية والحجز.');
});
