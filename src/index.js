import "element-plus/dist/index.css"; // 引入 element-plus 样式

import ElBreadcrumb from "./components/Breadcrumb/index.js";
import ElMindmap from "./components/MindMap/index.js";
import { ElImage, ElDialog } from "element-plus"

const components = [ElBreadcrumb, ElMindmap, ElImage, ElDialog];

// 全局组件一次性引用
const install = (app) => {
	components.forEach((component) => {
		app.component(component.name, component);
	});
};

export { install, ElBreadcrumb, ElMindmap, ElImage, ElDialog };

export default install;
