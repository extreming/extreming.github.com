<template>
	<div>
		<div class="header">
			<h2>
				Welcome To Allen's Home!
			</h2>
		</div>
		<div class="main">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="{span:6,offset:2}">
					<el-table :data="tabelData.data1" border :show-header="false" :span-method="rowSpan">
						<el-table-column prop="type" align="center"></el-table-column>
						<el-table-column>
							<template slot-scope="scope">
								<a class="link" :href="scope.row.link" target="_blank">{{scope.row.name}}</a>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
				<el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="6">
					<el-table :data="tabelData.data2" border :show-header="false" :span-method="rowSpan">
						<el-table-column prop="type" align="center"></el-table-column>
						<el-table-column>
							<template slot-scope="scope">
								<a class="link" :href="scope.row.link" target="_blank">{{scope.row.name}}</a>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
				<el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="6">
					<el-table :data="tabelData.data3" border :show-header="false" :span-method="rowSpan">
						<el-table-column prop="type" align="center"></el-table-column>
						<el-table-column>
							<template slot-scope="scope">
								<a class="link" :href="scope.row.link" target="_blank">{{scope.row.name}}</a>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tabelData:{
					data1: [
						{
							type: 'Vue 学习资料',
							name: 'Vue',
							link: 'https://cn.vuejs.org'
						},
						{
							type: 'Vue 学习资料',
							name: 'Vux',
							link: 'https://vux.li/#/zh-CN/components'
						},
						{
							type: 'Vue 学习资料',
							name: 'Echarts',
							link: 'http://echarts.baidu.com'
						},
						{
							type: 'Vue 学习资料',
							name: 'vue-table',
							link: 'http://doc.huangsw.com/vue-easytable/app.html#/intro'
						},
						{
							type: 'Vue 学习资料',
							name: 'Vue2.0全家桶视频',
							link: 'http://edu.51cto.com/course/10543.html'
						}
					],
					data2: [
						{
							type: 'JavaScript 学习资料',
							name: 'JS参考书--阮一峰',
							link: 'http://javascript.ruanyifeng.com/#toc0'
						},
						{
							type: 'JavaScript 学习资料',
							name: 'Number与String的互相转化',
							link: 'http://blog.csdn.net/dc15822445347/article/details/23288367'
						},
						{
							type: 'JavaScript 学习资料',
							name: 'Css命名规范',
							link: 'https://www.zhihu.com/question/19586885'
						},
						{
							type: 'JavaScript 学习资料',
							name: 'Chrome插件DIY',
							link: 'https://coolriver.net.cn/articles/chrome-plugins-diy'
						}
					],
					data3: [
						{
							type: 'Sublime 使用心得',
							name: 'Sbulime 配置和安装',
							link: 'http://blog.csdn.net/zzh_my/article/details/78735657'
						}
					]
				}
				
			}
		},
		methods: {
			rowSpan({ row, column, rowIndex, columnIndex }) {
				if (columnIndex % 2 === 0) {
					if (rowIndex === 0) {
						return {
							rowspan: 5,
							colspan: 1
						}
					} else {
						return [0,0]
					}
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.header {
		width: 100%;
		height: 80px;
		background: #666;
		color: #fff;
		h2 {
			font-size: 20px;
			text-align: center;
			line-height: 80px;
		}
	}
	.main {
		width: 90%;
		margin: 0 auto;
		.table1 {
			.title {
				font-size: 18px;
				font-weight: bold;
				text-align: center;
			}
		}
	}
	.link {
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
	}
</style>