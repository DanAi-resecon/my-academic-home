# My Academic Home

我想建一个personal 学术静态网站, 如何申请买一个驿名

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7d528ec7-cb8c-43be-ae92-2b8d008f9434).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## GitHub Pages 发布（保留 danai-econ.com）

网站已配置为在 `main` 更新后自动导出四个静态页面，并通过 GitHub Actions 发布。照片和 CV 从资产指针下载到发布文件中，不会把二进制文件提交到仓库。GitHub Pages 不显示 Lovable 编辑徽章。

### 首次启用

1. 打开 `DanAi-resecon/my-academic-home` 仓库 → **Settings → Pages**。
2. **Build and deployment → Source** 选择 **GitHub Actions**。若 GitHub 要求升级套餐才能发布私有仓库，可将仓库改为 Public，或使用支持私有仓库 Pages 的套餐。
3. 打开 **Actions → Deploy academic website to GitHub Pages**，查看自动运行；需要重试时点 **Run workflow**，选择 `main`。
4. 在 **Settings → Pages → Custom domain** 输入 `danai-econ.com` 并保存。如 GitHub 要求验证域名，请按页面给出的 TXT 记录验证；每个账号的值不同。

### 把域名从当前托管切换到 GitHub

等 Actions 发布成功后，再到域名购买平台修改 DNS，避免提前切换导致网站暂时打不开：

| 类型 | 名称 | 值 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | danai-resecon.github.io |

替换根域名现有指向旧托管的 A/AAAA/ALIAS 记录，避免与 GitHub 记录冲突；不要删除邮件等无关记录。若存在旧 AAAA 记录，先删除旧托管地址，或按 GitHub 官方文档设置其 IPv6 地址。

DNS 检查和证书准备完成后，在 GitHub Pages 勾选 **Enforce HTTPS**。DNS 生效时间由域名平台和缓存决定，可能需要数小时到一天；迁移前不要停用原网站。迁移后的网址仍然是 **https://danai-econ.com**。

配置以自定义域名根目录为目标，不支持同时使用 `/my-academic-home/` 子目录地址。

### 以后修改

修改 `src/routes/index.tsx`、`cv.tsx`、`research.tsx` 或 `teaching.tsx`，并提交到 `main`，GitHub Actions 会自动重新发布；无需点击 Lovable Publish。新增页面时，须同时更新 `vite.config.ts` 和 `scripts/github-pages.mjs` 中的页面列表。

本地检查发布辅助脚本：`node --test scripts/github-pages.test.mjs`。

GitHub 官方说明：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
