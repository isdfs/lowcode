/**
 * 自动化埋点配置模块。
 *
 * 该模块允许通过配置文件自动化埋点，无需手动添加事件监听器。
 *
 * @example
 * ```
 * const config = [
 *   { selector: '.track-click', event: 'click', eventName: 'button_click' },
 *   { selector: '.track-form', event: 'submit', eventName: 'form_submit' },
 * ];
 * const tracker = new AutoTracker(config, '/track');
 * tracker.init();
 * ```
 */
interface TrackerConfig {
    selector: string;
    event: string;
    eventName: string;
}
export declare class AutoTracker {
    private config;
    private url;
    constructor(config: TrackerConfig[], url: string);
    /**
     * 初始化自动化埋点，根据配置文件为指定的元素添加事件监听器。
     * @returns {void}
     */
    init(): void;
}
export {};