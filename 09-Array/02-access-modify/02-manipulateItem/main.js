let styles = ['Jazz', 'Blues'];
styles[2] = 'Rock-n-Roll';
styles[1] = 'Classic';
delete styles[0];
console.log(styles.length); // 3 ตัวเหมือนเดิม แต่กลายเป็นพท.ว่างในช่องที่ลบ [empty, 'Classic', 'Rock-n-Roll']