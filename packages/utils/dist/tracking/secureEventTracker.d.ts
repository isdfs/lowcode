/**
 * 数据加密与安全性管理模块。
 *
 * 该模块在发送埋点数据前对其进行加密，确保数据在传输过程中不会被篡改或泄露。
 *
 * @example
 * ```
 * const secureTracker = new SecureEventTracker('/secure-track', 'my-secret-key');
 * secureTracker.trackEvent('login_attempt', { username: 'user123' });
 * ```
 */
export declare class SecureEventTracker {
    private url;
    private secretKey;
    constructor(url: string, secretKey: string);
    /**
     * 跟踪事件并对数据进行加密后发送到服务器。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    trackEvent(eventName: string, eventData: Record<string, any>): void;
    /**
     * 使用AES算法对数据进行加密。
     * @param {string} data - 要加密的字符串数据。
     * @returns {string} 返回加密后的字符串。
     */
    private encryptData;
    /**
     * 发送加密后的数据到服务器。
     * @param {string} encryptedData - 加密后的字符串数据。
     * @returns {void}
     */
    private sendEncryptedData;
}
