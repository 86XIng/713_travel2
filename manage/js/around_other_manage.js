$(function() {
	//商品信息分页显示
	layui.use('table', function() {
		var table = layui.table;

		table.render({
			elem: '#other_item',
			height: 315,
			url: '' //数据接口
				,
			page: true //开启分页
				,
			cols: [
				[ //表头
					{
						field: 'item_id',
						title: 'id(item)',
						width: 100,
						sort: true,
						fixed: 'left'
					}, {
						field: 'item_name',
						title: '名称',
						width: 200
					},  {
						field: 'other_id',
						title: 'id(other)',
						width: 100
					}, {
						field: 'item_price',
						title: '价格',
						width: 120,
						sort: true
					}, {
						field: 'item_discount',
						title: '折扣',
						width: 120,
						sort: true
					}, {
						field: 'item_sum',
						title: '总量',
						width: 80,
						sort: true
					}, {
						field: 'item_surplus',
						title: '剩余',
						width: 80,
						sort: true
					}, {
						field: 'item_tag',
						title: '标签',
						width: 180
					}, {
						field: 'item_operation',
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