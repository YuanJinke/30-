# 贡献指南

感谢您对游戏大厅项目的关注！我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告bug
- ✨ 提出新功能建议
- 📝 改进文档
- 🎨 改进UI/UX设计
- ⚡ 性能优化
- 🧪 添加测试
- 🔧 提交代码修复

## 开始之前

在开始贡献之前，请：

1. 阅读我们的[行为准则](CODE_OF_CONDUCT.md)
2. 查看现有的[Issues](https://github.com/yourusername/game-hub/issues)和[Pull Requests](https://github.com/yourusername/game-hub/pulls)
3. 确保您的贡献符合项目目标

## 如何贡献

### 报告Bug

1. 检查[现有Issues](https://github.com/yourusername/game-hub/issues)确保bug未被报告
2. 创建新的Issue，使用"Bug Report"模板
3. 提供详细的信息：
   - Bug描述
   - 复现步骤
   - 期望行为
   - 实际行为
   - 环境信息（浏览器、操作系统等）
   - 相关截图（如有）

### 提出新功能

1. 检查[现有Issues](https://github.com/yourusername/game-hub/issues)确保功能未被建议
2. 创建新的Issue，使用"Feature Request"模板
3. 详细描述：
   - 功能描述
   - 使用场景
   - 实现建议（如有）

### 提交代码

1. **Fork** 这个仓库
2. **克隆** 您的Fork到本地：
   ```bash
   git clone https://github.com/yourusername/game-hub.git
   cd game-hub
   ```
3. **创建** 新分支：
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **进行** 您的更改：
   - 遵循项目的代码规范
   - 添加必要的注释
   - 确保代码可读性
5. **测试** 您的更改：
   - 确保所有功能正常工作
   - 测试不同浏览器兼容性
6. **提交** 您的更改：
   ```bash
   git add .
   git commit -m "feat: 添加新功能描述"
   ```
7. **推送** 到您的Fork：
   ```bash
   git push origin feature/your-feature-name
   ```
8. **创建** Pull Request：
   - 使用清晰的标题和描述
   - 引用相关的Issue（如有）
   - 添加截图或GIF展示更改（如有）

## 代码规范

### HTML

- 使用语义化的HTML5标签
- 保持适当的缩进
- 为所有图片添加alt属性
- 使用双引号包裹属性值

### CSS

- 使用BEM命名约定
- 保持CSS选择器简单
- 避免使用!important
- 使用相对单位（rem, em, %）

### JavaScript

- 使用ES6+语法
- 使用const和let，避免var
- 函数使用驼峰命名
- 类名使用帕斯卡命名
- 添加适当的注释

### 提交信息

使用[约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)格式：

```
<类型>[可选的作用域]: <描述>

[可选的正文]

[可选的脚注]
```

类型包括：
- feat: 新功能
- fix: 修复bug
- docs: 文档更新
- style: 代码格式（不影响功能）
- refactor: 重构
- test: 添加测试
- chore: 构建过程或辅助工具的变动

示例：
```
feat(game): 添加游戏暂停功能

- 添加暂停/继续按钮
- 实现游戏状态保存和恢复
- 更新UI显示当前状态

Closes #123
```

## 添加新游戏

如果您想添加新游戏：

1. 在项目根目录下创建新的游戏文件夹（如 `31-NewGame/`）
2. 在文件夹中创建以下文件：
   - `index.html` - 游戏页面
   - `script.js` - 游戏逻辑
   - `style.css` - 游戏样式
   - `README.md` - 游戏说明（可选）
3. 在 `main.js` 中的 `games` 数组中添加新游戏的信息：
   ```javascript
   {
       id: 31,
       name: "游戏名称",
       category: "游戏类型", // action, puzzle, classic, arcade
       icon: "fas fa-icon-name",
       description: "游戏描述",
       url: "31-NewGame/index.html",
       color: "from-color-1 to-color-2"
   }
   ```
4. 确保新游戏：
   - 响应式设计，适配不同屏幕尺寸
   - 符合项目的整体风格
   - 代码简洁、可读和高效
   - 在主流浏览器中正常运行

## 审查流程

所有Pull Request都需要经过代码审查，确保：

1. 代码符合项目规范
2. 功能正常工作
3. 没有引入新的bug
4. 文档已更新（如有需要）

## 发布流程

项目维护者会定期合并已审查的Pull Request并发布新版本。

## 获取帮助

如果您有任何问题或需要帮助：

1. 查看[常见问题](https://github.com/yourusername/game-hub/wiki/FAQ)
2. 搜索[现有Issues](https://github.com/yourusername/game-hub/issues)
3. 创建新的Issue寻求帮助

## 致谢

感谢所有为这个项目做出贡献的开发者！您的贡献使这个项目变得更好。

---

再次感谢您的贡献！🎉