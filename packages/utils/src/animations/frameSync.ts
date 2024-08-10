/**
 * FrameSyncOptions 用于配置帧同步动画的选项。
 * @param animations - 要同步执行的动画数组。
 */
interface FrameSyncOptions {
  animations: KeyframeAnimation[];
}

/**
* FrameSync 类实现了帧同步动画管理。
*/
class FrameSync {
  private animations: KeyframeAnimation[];
  private animationFrameId: number | null = null;

  constructor(options: FrameSyncOptions) {
      this.animations = options.animations;
  }

  /**
   * start 方法开始帧同步动画。
   */
  start() {
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止帧同步动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
  }

  /**
   * animate 方法在每个帧上执行所有动画。
   */
  private animate() {
      this.animations.forEach(animation => {
          animation.start();
      });
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }
}

/**
* 使用示例：
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 800 });
* const frameSync = new FrameSync({ animations: [anim1, anim2] });
* frameSync.start(); // 在每个帧上同步执行 anim1 和 anim2
*/