$(function() {
	//商品信息分页显示
	layui.use('table', function() {
		var table = layui.table;

		table.render({
			elem: '#hotel_room',
			height: 315,
			url: '' //数据接口
				,
			page: true //开启分页
				,
			cols: [
				[ //表头
					{
						field: 'room_id',
						title: '房间id',
						width: 100,
						sort: true,
						fixed: 'left'
					}, {
						field: 'room_name',
						title: '房间名称',
						width: 200
					}, {
						field: 'hotel_id',
						title: '酒店id',
						width: 100
					}, {
						field: 'room_price',
						title: '房间价格',
						width: 120,
						sort: true
					}, {
						field: 'room_discount',
						title: '房间折扣',
						width: 120,
						sort: true
					}, {
						field: 'room_sum',
						title: '总量',
						width: 80,
						sort: true
					}, {
						field: 'room_surplus',
						title: '剩余',
						width: 80,
						sort: true
					}, {
						field: 'room_tag',
						title: '标签',
						width: 180
					}, {
						field: 'room_operation',
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