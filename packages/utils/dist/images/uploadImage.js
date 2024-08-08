"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
/**
 * 将图片文件上传到指定的服务器端点
 *
 * @param {File} file - 图片文件对象
 * @param {string} uploadUrl - 服务器上传端点的 URL
 * @returns {Promise<Response>} 返回包含上传响应的 Promise
 *
 * @example
 * const file = document.querySelector('input[type="file"]').files[0];
 * uploadImage(file, 'https://example.com/upload')
 *   .then(response => console.log('Upload successful', response))
 *   .catch(error => console.error('Upload failed', error));
 */
function uploadImage(file, uploadUrl) {
    var formData = new FormData();
    formData.append('file', file);
    return fetch(uploadUrl, {
        method: 'POST',
        body: formData,
    });
}
exports.uploadImage = uploadImage;
