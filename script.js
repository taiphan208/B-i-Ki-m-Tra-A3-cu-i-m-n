/*
 * Demo kiểm tra form ở phía trình duyệt.
 * Không gửi dữ liệu lên máy chủ và không lưu dữ liệu.
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  const result = document.querySelector('#form-result');

  if (!form || !result) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const name = form.elements.fullname.value.trim();
    result.hidden = false;
    result.className = 'form-result form-result-success';
    result.textContent = `Thông tin của ${name} đã vượt qua kiểm tra trên trình duyệt. Đây chỉ là bản demo; dữ liệu chưa được gửi hoặc lưu ở đâu cả.`;
  });
});
