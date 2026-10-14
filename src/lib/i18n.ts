import { useCallback, useEffect, useState } from "react";

/** User-facing text uses English keys so untranslated messages remain readable. */
export const zhCN: Record<string, string> = {
  "Settings": "设置",
  "Language": "语言",
  "English": "English",
  "Simplified Chinese": "简体中文",
  "Tray": "菜单栏图标",
  "Icon + Session": "图标 + 会话额度",
  "Hourly + Weekly": "五小时 + 每周额度",
  "Hidden": "隐藏",
  "Dock Icon": "程序坞图标",
  "Show in Dock": "显示在程序坞",
  "Menu Bar Only": "仅菜单栏",
  "At least one of the Dock or tray icons stays visible so you can reopen Codex Switcher.": "程序坞或菜单栏图标至少保留一个，确保能够重新打开 Codex Switcher。",
  "Loading display settings...": "正在加载显示设置…",
  "Could not update display settings:": "更新显示设置失败：",
  "Codex close method": "Codex 关闭方式",
  "Ask every time": "每次询问",
  "Gracefully close": "正常退出",
  "Force close": "强制关闭",
  "Graceful close lets Codex finish cleanup. Force close stops it immediately and may lose unsaved work.": "正常退出允许 Codex 完成清理；强制关闭会立即终止进程，可能丢失未保存的工作。",
  "Reopen Codex after close": "关闭后重新打开 Codex",
  "Reopen desktop app": "重新打开桌面应用",
  "Keep closed": "保持关闭",
  "Applies to detected Codex desktop apps on macOS and Windows. When switching accounts, the app reopens after the switch succeeds.": "适用于 macOS 和 Windows 上检测到的 Codex 桌面应用。切换账号成功后将重新打开应用。",
  "Done": "完成",
  "Codex Switcher": "Codex Switcher",
  "Close": "关闭",
  "Auto Warm Up": "自动预热",
  "Timer": "定时预热",
  "Appearance": "外观",
  "Timed warm-up": "定时预热",
  "No times added yet.": "尚未添加时间。",
  "Add": "添加",
  "+ Add Account": "+ 添加账号",
  "Add Account": "添加账号",
  "Loading accounts...": "正在加载账号…",
  "Failed to load accounts": "加载账号失败",
  "No accounts yet": "还没有账号",
  "Add your first Codex account to get started": "添加第一个 Codex 账号以开始使用",
  "No matching accounts": "未找到匹配的账号",
  "Try a different account name or email address.": "试试其他账号名称或邮箱。",
  "Active Account": "当前账号",
  "Sort": "排序",
  "Reset: earliest to latest": "重置时间：由近到远",
  "Reset: latest to earliest": "重置时间：由远到近",
  "% remaining: highest to lowest": "剩余额度：从高到低",
  "% remaining: lowest to highest": "剩余额度：从低到高",
  "Expiry: earliest to latest": "到期时间：由近到远",
  "Expiry: latest to earliest": "到期时间：由远到近",
  "Usage refreshed successfully": "额度已刷新",
  "Click delete again to confirm removal": "再次点击删除以确认移除",
  "Close running Codex processes?": "关闭正在运行的 Codex 进程？",
  "Force close Codex": "强制关闭 Codex",
  "Remember this selection": "记住此选项",
  "Checking for a desktop app to reopen...": "正在检测可重新打开的桌面应用…",
  "Reopen Codex desktop after close": "关闭后重新打开 Codex 桌面应用",
  "You can change this later in Settings. Terminal and IDE sessions will not reopen.": "之后可在设置中修改。终端和 IDE 会话不会自动重新打开。",
  "No supported desktop app could be identified for reopening. Codex will only be closed.": "未找到可重新打开的桌面应用，仅会关闭 Codex。",
  "Unsaved Codex work may be lost.": "未保存的 Codex 工作可能丢失。",
  "Cancel": "取消",
  "Keep Codex Switcher in the Dock?": "在程序坞中保留 Codex Switcher？",
  "When the window is closed, Codex Switcher can stay in the Dock or live only in the menu bar.": "关闭窗口后，可以保留程序坞图标，也可以仅在菜单栏运行。",
  "You can always change this later from the tray popup.": "之后可随时通过菜单栏弹窗更改。",
  "Don't ask again": "不再询问",
  "Keep in Dock": "保留在程序坞",
  "Existing accounts are kept. Only missing accounts are imported.": "现有账号保持不变，仅导入缺失的账号。",
  "This slim string contains account secrets. Keep it private.": "此字符串包含账号敏感信息，请妥善保管。",
  "Minimize": "最小化",
  "Close running Codex processes": "关闭正在运行的 Codex 进程",
  "Open Codex app": "打开 Codex 应用",
  "Menu": "菜单",
  "Search accounts by name or email": "按名称或邮箱搜索账号",
  "Search accounts": "搜索账号",
  "Clear account search": "清除账号搜索",
  "Show all account names and emails": "显示全部账号名称和邮箱",
  "Hide all account names and emails": "隐藏全部账号名称和邮箱",
  "Opening...": "正在打开…",
  "Open Codex": "打开 Codex",
  "Refreshing all usage": "正在刷新所有额度",
  "Refresh all usage": "刷新所有额度",
  "Warming up all accounts": "正在预热全部账号",
  "Warm up all accounts": "预热全部账号",
  "Hide account search": "隐藏账号搜索",
  "Exporting...": "正在导出…",
  "Export Slim Text": "导出简化字符串",
  "Importing...": "正在导入…",
  "Import Slim Text": "导入简化字符串",
  "Export Full Encrypted File": "导出完整加密文件",
  "Import Full Encrypted File": "导入完整加密文件",
  "Close and switch account": "关闭并切换账号",
  "Close Codex": "关闭 Codex",
  "Stops Codex immediately. Unsaved work may be lost.": "立即终止 Codex，未保存的工作可能丢失。",
  "Asks Codex to quit normally so it can finish cleanup.": "请求 Codex 正常退出，以便完成清理。",
  "Codex desktop will reopen automatically.": "Codex 桌面应用将自动重新打开。",
  "Codex desktop will stay closed.": "Codex 桌面应用将保持关闭。",
  "Force closing...": "正在强制关闭…",
  "Closing...": "正在关闭…",
  "Generating...": "正在生成…",
  "Export string will appear here": "导出字符串将显示在这里",
  "Paste config string here": "在此粘贴配置字符串",
  "Clipboard unavailable. Please copy manually.": "剪贴板不可用，请手动复制。",
  "Copied": "已复制",
  "Copy String": "复制字符串",
  "Import Missing Accounts": "导入缺失账号",
  "Slim export failed": "简化字符串导出失败",
  "Slim import failed": "简化字符串导入失败",
  "Full export failed": "完整文件导出失败",
  "Full import failed": "完整文件导入失败",
  "Please paste the slim text string first.": "请先粘贴简化字符串。",
  "Full encrypted file exported.": "完整加密文件已导出。",
  "Codex app opened.": "Codex 应用已打开。",
  "No accounts available for warm-up": "没有可预热的账号",
  "Warming...": "正在预热…",
  "Waiting reset": "等待额度重置",
  "Auto warming...": "自动预热中…",
  "Auto: on": "自动：开",
  "Auto: off": "自动：关",
  "Timed warming...": "定时预热中…",
  "Timed: off": "定时：关",
  "Could not check running Codex processes. Try again.": "无法检查正在运行的 Codex 进程，请重试。",
  "Account switched. Codex desktop reopened.": "账号已切换，Codex 桌面应用已重新打开。",
  "Codex desktop reopened.": "Codex 桌面应用已重新打开。",
  "No closed desktop app could be identified for reopening. Open Codex manually.": "未找到可重新打开的桌面应用，请手动打开 Codex。",
  "Switched account from tray.": "已通过菜单栏切换账号。",
  "Account Name (optional)": "账号名称（可选）",
  "Waiting for browser login...": "等待浏览器登录…",
  "Please open the following link in your browser to proceed:": "请在浏览器中打开以下链接继续：",
  "Open": "打开",
  "OAuth login must finish on the same host machine because the callback redirects to `localhost`.": "OAuth 登录必须在当前主机完成，因为回调地址指向 `localhost`。",
  "Click the button below to generate a login link. You will need to open it in your browser to authenticate.": "点击下方按钮生成登录链接，然后在浏览器中完成验证。",
  "Select auth.json file": "选择 auth.json 文件",
  "Browse...": "浏览…",
  "Import credentials from an existing Codex auth.json file": "从现有 Codex auth.json 文件导入登录凭据",
  "Leave blank to use email": "留空则使用邮箱地址",
  "ChatGPT Login": "ChatGPT 登录",
  "Import File": "导入文件",
  "Copied!": "已复制！",
  "Copy": "复制",
  "Adding...": "正在添加…",
  "Generate Login Link": "生成登录链接",
  "Import": "导入",
  "Please select an auth.json file": "请选择 auth.json 文件",
  "Clipboard unavailable. Copy the link manually.": "剪贴板不可用，请手动复制链接。",
  "✓ Active": "✓ 当前账号",
  "Never": "从不",
  "Just now": "刚刚",
  "just now": "刚刚",
  "Expiry unavailable": "到期时间不可用",
  "API Key": "API 密钥",
  "Unknown": "未知",
  "Click to rename": "点击重命名",
  "Refresh usage": "刷新额度",
  "Show info": "显示信息",
  "Hide info": "隐藏信息",
  "Close running Codex processes and switch account": "关闭 Codex 进程并切换账号",
  "Switching...": "切换中…",
  "Switch": "切换",
  "Sending warm-up request...": "正在发送预热请求…",
  "Send minimal warm-up request": "发送最小预热请求",
  "Auto warm-up is enabled for all accounts": "已为全部账号开启自动预热",
  "Disable auto warm-up for this account": "关闭此账号的自动预热",
  "Enable auto warm-up for this account": "开启此账号的自动预热",
  "Hide usage statistics": "隐藏使用统计",
  "Show usage statistics": "显示使用统计",
  "Remove account": "移除账号",
  "Daily activity unavailable": "每日活动数据不可用",
  "Token activity": "Token 使用趋势",
  "More usage details": "更多使用详情",
  "Activity insights": "活动分析",
  "Fast mode": "快速模式",
  "Reasoning": "推理",
  "Skills explored": "使用过的技能",
  "Total threads": "会话总数",
  "Most used plugins": "最常用的插件",
  "Token activity range": "Token 使用时间范围",
  "Last 30 days": "最近 30 天",
  "Last 3 months": "最近 3 个月",
  "Last 6 months": "最近 6 个月",
  "All reported": "全部记录",
  "Longest task": "最长任务",
  "Longest streak": "最长连续使用天数",
  "Refresh usage stats": "刷新使用统计",
  "Lifetime": "累计",
  "Today": "今天",
  "Last 7 days": "最近 7 天",
  "Current streak": "当前连续天数",
  "Peak day": "峰值日期",
  "Usage stats unavailable.": "使用统计不可用。",
  "Usage stats are available for ChatGPT accounts only.": "仅 ChatGPT 账号支持使用统计。",
  "ChatGPT backend": "ChatGPT 后端",
  "Available resets": "可用重置次数",
  "Times shown in your local time": "时间以本地时区显示",
  "Reset credit expiry details": "重置次数到期详情",
  "No expiry": "不会到期",
  "no expiry": "不会到期",
  "expiry unavailable": "到期时间不可用",
  "5h Limit": "五小时额度",
  "Weekly Limit": "每周额度",
  "Fetching usage...": "正在获取额度…",
  "No rate limit data": "暂无额度数据",
  "Later": "稍后",
  "Update": "更新",
  "Downloading update...": "正在下载更新…",
  "Installing update. Complete any system authorization prompt...": "正在安装更新，请完成系统授权提示…",
  "Update ready. Restart to apply.": "更新已就绪，重启后生效。",
  "Restart": "重启",
  "Dismiss": "关闭",
  "Loading...": "加载中…",
  "No accounts configured": "尚未配置账号",
  "Usage unavailable": "额度不可用",
  "today": "今天",
  "last 7 days": "最近 7 天",
  "Dock": "程序坞",
  "Show": "显示",
  "Menu Bar": "菜单栏",
  "Open Codex Switcher": "打开 Codex Switcher",
  "Quit": "退出",
  "Disable auto warm-up for all accounts": "关闭所有账号的自动预热",
  "Enable auto warm-up for all accounts": "开启所有账号的自动预热",
  "Session": "五小时",
  "Weekly": "每周",
  "Resets now": "现在重置",
  "on": "开",
  "off": "关",
  "Unknown error": "未知错误"
};

export type Locale = "en" | "zh-CN";
export const LOCALE_STORAGE_KEY = "codex-switcher.locale";
export const LOCALE_CHANGED_EVENT = "codex-switcher:locale-changed";

let currentLocale: Locale | null = null;

export function readLocale(): Locale {
  if (currentLocale) return currentLocale;
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === "en" || saved === "zh-CN") return saved;
  } catch { /* Browsers may disable local storage. */ }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

export function t(message: string): string {
  return readLocale() === "zh-CN" ? zhCN[message] ?? message : message;
}

export function setLocale(locale: Locale): void {
  currentLocale = locale;
  if (typeof window === "undefined") return;
  try { window.localStorage.setItem(LOCALE_STORAGE_KEY, locale); } catch { /* Session-only fallback. */ }
  window.dispatchEvent(new Event(LOCALE_CHANGED_EVENT));
  if ("__TAURI_INTERNALS__" in window) {
    void import("@tauri-apps/api/event")
      .then(({ emit }) => emit(LOCALE_CHANGED_EVENT, locale))
      .catch(() => {});
  }
}

/** Re-renders UI on language changes, including updates made in another window. */
export function useLocale(): readonly [Locale, (locale: Locale) => void] {
  const [locale, update] = useState<Locale>(readLocale);
  useEffect(() => {
    const sync = () => {
      currentLocale = null;
      const next = readLocale();
      update(next);
      document.documentElement.lang = next;
    };
    document.documentElement.lang = readLocale();
    window.addEventListener(LOCALE_CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    let unlisten: (() => void) | undefined;
    if ("__TAURI_INTERNALS__" in window) {
      void import("@tauri-apps/api/event")
        .then(async ({ listen }) => {
          const stop = await listen<Locale>(LOCALE_CHANGED_EVENT, ({ payload }) => {
            if (payload === "en" || payload === "zh-CN") {
              currentLocale = payload;
              update(payload);
              document.documentElement.lang = payload;
            }
          });
          unlisten = stop;
        }).catch(() => {});
    }
    return () => {
      window.removeEventListener(LOCALE_CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
      unlisten?.();
    };
  }, []);
  return [locale, useCallback((next: Locale) => setLocale(next), [])] as const;
}
