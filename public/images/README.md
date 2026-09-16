# Image upload slots

每个项目保留以下图片位置：

- `hero.webp`：角色主视觉，建议横向或 4:3，至少 1600px 宽。
- `result-01.webp`：第一张真实项目截图。
- `result-02.webp`：第二张真实项目截图（可选）。
- `result-03.webp`：第三张真实项目截图（可选）。

目录：

- `zhan-chenyi/`
- `yu-zhi/`
- `huo-bingchu/`
- `yin-zhaoye/`

上传图片后，在 `src/data/projects.js` 对应项目中填写：

```js
heroImage: "/images/yu-zhi/hero.webp",
gallery: [
  {
    src: "/images/yu-zhi/result-01.webp",
    alt: "虞执项目实际界面",
    caption: "PC 端 Interactive Status UI",
  },
],
```

未填写 `heroImage` 时显示明确的主视觉占位；`gallery` 为空时 Result
区域不会生成灰色图片框或额外空白。
