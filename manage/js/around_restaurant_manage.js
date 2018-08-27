$(function() {
	//商品信息分页显示
	layui.use('table', function() {
		var table = layui.table;

		table.render({
			elem: '#restaurant_dish',
			height: 315,
			url: '' //数据接口
				,
			page: true //开启分页
				,
			cols: [
				[ //表头
					{
						field: 'dish_id',
						title: '菜品id',
						width: 100,
						sort: true,
						fixed: 'left'
					}, {
						field: 'dish_name',
						title: '菜品名称',
						width: 200
					}, {
						field: 'restaurant_id',
						title: '餐厅id',
						width: 100
					}, {
						field: 'dish_price',
						title: '菜品价格',
						width: 120,
						sort: true
					}, {
						field: 'dish_discount',
						title: '菜品折扣',
						width: 120,
						sort: true
					}, {
						field: 'dish_sum',
						title: '总量',
						width: 80,
						sort: true
					}, {
						field: 'dish_surplus',
						title: '剩余',
						width: 80,
						sort: true
					}, {
						field: 'dish_tag',
						title: '标签',
						width: 180
					}, {
						field: 'dish_operation',
						title: '操作',
						width: 200,
						toolbar: '#barDemo'
					}
				]
			]
		});
        //操作
		table.on('tool(y_main_table)', function(obj) {
			var data = obj.data;
			if(obj.event === 'detail') {
				layer.msg('ID：' + data.id + ' 的查看操作');
			} else if(obj.event === 'del') {
				layer.confirm('真的删除行么', function(index) {
					obj.del();
					layer.close(index);
				});
			} else if(obj.event === 'edit') {
				layer.alert('编辑行：<br>' + JSON.stringify(data))
			}
		});

	});
})