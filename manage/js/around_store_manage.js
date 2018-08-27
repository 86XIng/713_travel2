$(function() {
	//商品信息分页显示
	layui.use('table', function() {
		var table = layui.table;

		table.render({
			elem: '#store_good',
			height: 315,
			url: 'demo.json' //数据接口
				,
			page: true //开启分页
				,
			cols: [
				[ //表头
					{
						field: 'good_id',
						title: '商品id',
						width: 100,
						sort: true,
						fixed: 'left'
					}, {
						field: 'good_name',
						title: '商品名称',
						width: 200
					}, {
						field: 'shop_id',
						title: '商铺id',
						width: 100
					}, {
						field: 'good_price',
						title: '商品价格',
						width: 120,
						sort: true
					}, {
						field: 'good_discount',
						title: '商品折扣',
						width: 120,
						sort: true
					}, {
						field: 'good_sum',
						title: '总量',
						width: 80,
						sort: true
					}, {
						field: 'good_surplus',
						title: '剩余',
						width: 80,
						sort: true
					}, {
						field: 'good_tag',
						title: '标签',
						width: 180
					}, {
						field: 'good_operation',
						title: '操作',
						width: 200,
						toolbar: '#barDemo'
					}
				]
			]
		});
        //操作
		table.on('tool(y_table_good)', function(obj) {
			var data = obj.data;
			if(obj.event === 'detail') {
				layer.msg('商品名称：' + data.good_name+'<br>商铺id:'+data.shop_id+'<br>商品价格:'+data.good_price+'<br>商品折扣：'+data.good_discount+'<br>商品总量：'+data.good_sum+'<br>商品剩余：'+data.good_surplus+'<br>商品标签：'+data.good_tag);
			} else if(obj.event === 'del') {
				layer.confirm('确定删除该商品吗', function(index) {
					obj.del();
					layer.close(index);
				});
			} else if(obj.event === 'edit') {
				layer.alert('编辑行：<br>' + JSON.stringify(data))
			}
		});

	});
})