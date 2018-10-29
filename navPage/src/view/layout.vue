<template>
	<div>
		<el-row :gutter="10">
			<el-col :xs="24" :sm="12" :md="6" :lg="{span:4,offset:4}" :xl="6"><div class="item">1</div></el-col>
			<el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="6"><div class="item">2</div></el-col>
			<el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="6"><div class="item">3</div></el-col>
			<el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="6"><div class="item">4</div></el-col>
		</el-row>
	</div>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.item {
		background: aqua;
		text-align: center;
		border-radius: 4px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
</style>