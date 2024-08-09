/**
 * 数据快照管理器，用于管理数据的快照和回滚。
 *
 * @template T - 数据类型。
 * @returns {{
*   takeSnapshot: (data: T) => void,
*   rollback: () => T | undefined,
*   clearSnapshots: () => void
* }} - 包含创建快照、回滚和清除快照的方法。
*
* @example
* const snapshotManager = createSnapshotManager<{ count: number }>();
* snapshotManager.takeSnapshot({ count: 1 });
* snapshotManager.takeSnapshot({ count: 2 });
* console.log(snapshotManager.rollback()); // { count: 2 }
* console.log(snapshotManager.rollback()); // { count: 1 }
*/
export declare function createSnapshotManager<T>(): {
    takeSnapshot: (data: T) => void;
    rollback: () => T | undefined;
    clearSnapshots: () => void;
};