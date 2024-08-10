/**
 * TimelineAnimation 定义了一个时间轴中的动画步骤。
 * @param animation - 要执行的动画实例。
 * @param startTime - 动画开始时间，单位为毫秒。
 * @param duration - 动画持续时间，单位为毫秒。
 */
interface TimelineAnimation {
  animation: KeyframeAnimation;
  startTime: number;
  duration: number;
}

/**
* Timeline 用于管理和执行基于时间轴的动画。
*/
class Timeline {
  private animations: TimelineAnimation[] = [];
  private startTime: number | null = null;
  private animationFrameId: number | null = null;

  /**
   * addAnimation 方法用于向时间轴中添加动画步骤。
   * @param animation - 要添加的 KeyframeAnimation 实例。
   * @param startTime - 动画开始时间，单位为毫秒。
   * @param duration - 动画持续时间，单位为毫秒。
   */
  addAnimation(animation: KeyframeAnimation, startTime: number, duration: number) {
      this.animations.push({ animation, startTime, duration });
  }

  /**
   * start 方法开始执行时间轴动画。
   */
  start() {
      this.startTime = null;
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止时间轴动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
      this.startTime = null;
  }

  /**
   * animate 方法是时间轴动画的主循环，控制动画的同步执行。
   * @param timestamp - 当前时间戳。
   */
  private animate(timestamp: number) {
      if (!this.startTime) this.startTime = timestamp;
      const elapsed = timestamp - this.startTime;

      this.animations.forEach(({ animation, startTime, duration }) => {
          if (elapsed >= startTime && elapsed <= startTime + duration) {
              animation.start();
          } else if (elapsed > startTime + duration) {
              animation.stop();
          }
      });

      if (elapsed < this.animations.reduce((max, anim) => Math.max(max, anim.startTime + anim.duration), 0)) {
          this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
      }
  }
}

/**
* 使用示例：
* const timeline = new Timeline();
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 1000 });
* timeline.addAnimation(anim1, 0, 500); // anim1 在时间轴的 0ms 开始，持续 500ms
* timeline.addAnimation(anim2, 500, 1000); // anim2 在 500ms 开始，持续 1000ms
* timeline.start(); // 开始时间轴动画
*/