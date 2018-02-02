var mainPlatform = {

    init: function() {
        this.bindEvent();
        this._createTopMenu();
    },

    bindEvent: function() {
        var self = this;

        // 顶部大菜单单击事件
        $(document).on('click', '.pf-nav-item',
        function() {
        	
            $('.pf-nav-item').removeClass('current');
            $(this).addClass('current');
            // 渲染对应侧边菜单
            var m = $(this).data('sort');
            self._createSiderMenu(SystemMenu[m], m);
            
           var keshixuanzhe =   SystemMenu[m].keshixuanzhe;
           if(keshixuanzhe == "Y"  &&  canXuanZhe=="Y"){//需要进行权限科室选择
        	   xuanzheKeshi();
           }
	        var  title = $(this).children("a").children("span:eq(1)").text();
	        if(title == "门诊医生"){
	        	 $("#pf-bd").addClass("toggle");
	             $(window).resize();
	        }else{
	        	 $("#pf-bd").removeClass("toggle");
	             $(window).resize();
	        }
           
            
        });

        $(document).on('click', '.sider-nav .pf-menu-title',
        function() {
            $(this).closest('.pf-sider').find('.sider-nav li').removeClass('current');
            $(this).closest('li').addClass('current');

            // if is no-child
            if ($(this).closest('.no-child').size() > 0) {
                var index = $(this).closest('.pf-sider').attr('arrindex');

                if ($('.easyui-tabs1[arrindex=' + index + ']').tabs('exists', $(this).find('.sider-nav-title').text())) {
                    $('.easyui-tabs1[arrindex=' + index + ']').tabs('select', $(this).find('.sider-nav-title').text());
                    return false;
                } else {
                    $('.easyui-tabs1[arrindex=' + index + ']').tabs('add', {
                        title: $(this).find('.sider-nav-title').text(),
                        content: '<iframe class="page-iframe" bsrc="' + $(this).closest('.no-child').data('href') + '" src="'+$(this).closest('.no-child').data('href')+'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
                        closable: true
                    });
                    isFrist = true;

                }

            }
            // $('iframe').attr('src', $(this).data('src'));
        });

        $(document).on('click', '.pf-logout',
        function() {
            $.messager.confirm('确认对话框', '<span  style="font-size:15px">您想要退出该系统吗？</span>',
            function(r) {
                if (r) {
                    location.href = baseContextPath + '/login/logout.do';
                }
            });

        });

       $(document).on('click', '.sider-nav-s li',
        function(e) {
            var index = $(this).closest('.pf-sider').attr('arrindex');
            $(this).closest('.pf-sider').find('.active').removeClass('active');
            $(this).addClass('active');
            if ($('.easyui-tabs1[arrindex=' + index + ']').tabs('exists', $(this).text())) {
                $('.easyui-tabs1[arrindex=' + index + ']').tabs('select', $(this).text());
                return false;
            }
            $('.easyui-tabs1[arrindex=' + index + ']').tabs('add', {
                title: $(this).text(),
                content: '<iframe class="page-iframe" bsrc="' + $(this).data('href') + '" src="'+$(this).data('href')+'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
                closable: true
            });
        });
        // 左侧菜单收起
        $(document).on('click', '.toggle-icon',
        function() {
            $(this).closest("#pf-bd").toggleClass("toggle");
            $(window).resize();
        });

        // 关闭当前
        $('#mm-tabclose').click(function() {
            var currtab_title = $('#mm').data("currtab");
            $(".easyui-tabs1:visible").tabs('close', currtab_title);
        })
        // 全部关闭
        $('#mm-tabcloseall').click(function() {
            $(".easyui-tabs1:visible").find('.tabs li').each(function(i, n) {
                $(".easyui-tabs1:visible").tabs('close', $(n).text());
            });
        });
        // 关闭除当前之外的TAB
        $('#mm-tabcloseother').click(function() {
            var currtab_title = $('#mm').data("currtab");
            $('.tabs-inner span').each(function(i, n) {
                if ($(n).text() !== currtab_title) $(".easyui-tabs1:visible").tabs('close', $(n).text());
            });
        });

    },

    // 渲染顶级菜单
    _createTopMenu: function() {
        var menuStr = '',
        currentIndex = 0;
        try {
            if (SystemMenu) {

}
        } catch(e) {
            return;
        }

        var currentTitle =  "";
        //循环顶层元素信息
        for (var i = 0,
        len = SystemMenu.length; i < len; i++) {

            menuStr += '<li class="pf-nav-item project" data-sort="' + i + '" data-menu="system_menu_" + i>' + '<a href="javascript:;">' + '<span class="iconfont">' + SystemMenu[i].icon + '</span>' + '<span class="pf-nav-title">' + SystemMenu[i].title + '</span>' + '</a>' + '</li>';

            // 如果是当前选中行记录
            if (SystemMenu[i].isCurrent) {
                currentIndex = i;
                currentTitle = SystemMenu[i].title;
                this._createSiderMenu(SystemMenu[i], i);
            }
        }

        //给左侧加菜单
        $('.pf-nav').html(menuStr);
        //给当前按钮配置选中颜色标志
        $('.pf-nav-item').eq(currentIndex).addClass('current');
      
        if(currentTitle == "门诊医生"){//如果是门诊医生则默认收缩
       	    $("#pf-bd").toggleClass("toggle");
            $(window).resize();
        }
    },

    //创建左侧菜单
    _createSiderMenu: function(menu, index) {
        //左侧菜单先隐藏
        $('.pf-sider').hide();

        //创建当前界面的中央信息
        this._createPageContainer(index);

        if ($('.pf-sider[arrindex=' + index + ']').size() > 0) {
            $('.pf-sider[arrindex=' + index + ']').show();
            return false;
        };

        var menuStr = '<h2 class="pf-model-name">' + '<span class="iconfont">' + menu.icon + '</span>' + '<span class="pf-name">' + menu.title + '</span>' + '<span class="toggle-icon"></span>' + '</h2><ul class="sider-nav">';
        var hasCurrent = false;
        for (var i = 0,
        len = menu.menu.length; i < len; i++) {
            var m = menu.menu[i],
            mstr = '';
            var str = '';
            if (i == 0) {
                m.isCurrent = true;
            }
            if (m.isCurrent) {
                if (m.children && m.children.length > 0) {
                    str = '<li class="current">';
                } else {
                    str = '<li class="current no-child" data-href="' + m.href + '">';
                }
            } else {
                if (m.children && m.children.length > 0) {
                    str = '<li>';
                } else {
                    str = '<li class="no-child" data-href="' + m.href + '">';
                }
            }
            str += '<a href="javascript:;" class="pf-menu-title">' + '<span class="iconfont sider-nav-icon">' + m.icon + '</span>' + '<span class="sider-nav-title">' + m.title + '</span>' + '<i class="iconfont">&#xe642;</i>' + '</a>' + '<ul class="sider-nav-s">';

            //如果没有下级菜单,先判断2级菜单
            if (m.children.length == 0 && m.isCurrent) {
                hasCurrent = true;
                $('.easyui-tabs1[arrindex=' + index + ']').tabs('add', {
                    title: m.title,
                    content: '<iframe class="page-iframe" bsrc="' + m.href + '" src="'+ m.href+'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
                    closable: true

                });
            }

            //进行三级菜单判断
            var childStr = '';
            for (var j = 0,
            jlen = m.children.length; j < jlen; j++) {
                var child = m.children[j];
                if (j == 0 && hasCurrent == false) {
                    child.isCurrent = true;
                    hasCurrent = true;
                }
                if (child.isCurrent) {
                    childStr += '<li class="active" text="' + child.title + '" data-href="' + child.href + '"><a href="#">' + child.title + '</a></li>';
                    $('.easyui-tabs1[arrindex=' + index + ']').tabs('add', {
                        title: child.title,
                        content: '<iframe class="page-iframe" bsrc="' + child.href + '" src="'+child.href+'" frameborder="no" border="no" height="100%" width="100%" scrolling="auto"></iframe>',
                        closable: true
                    });
                } else {
                    childStr += '<li text="' + child.title + '" data-href="' + child.href + '"><a href="#">' + child.title + '</a></li>';
                }
            }

            mstr = str + childStr + '</ul></li>';

            menuStr += mstr;

        }
        $('.pf-sider-wrap').append($('<div class="pf-sider" arrindex="' + index + '"></div>').html(menuStr + '</ul>'));

    },

    //创建中央信息
    _createPageContainer: function(index) {
        //中央上面的tab先隐藏起来
        $('.easyui-tabs1').hide();
        //判断顶级菜单对应的中央菜单是否已经存在了，如果已经存在直接显示出来,并且返回不在往下执行
        if ($('.easyui-tabs1[arrindex=' + index + ']').size() > 0) {
            $('.easyui-tabs1[arrindex=' + index + ']').show();
            //获取上次选择的tabs
            $('.easyui-tabs1[arrindex=' + index + ']').tabs('select',0);
            return false;
        }
        //如果不存在则需要加入对应tabs
        var $tabs = $('<div class="easyui-tabs1" arrindex="' + index + '" style="width:100%;height:100%;">');
        $('#pf-page').append($tabs);
        //定义tabs的属性包含高度、选择触发时间
        $tabs.tabs({
            tabHeight: 27,
            onSelect: function(title, index) {
                var currentTab = $tabs.tabs("getSelected");
                if (currentTab.find("iframe") && currentTab.find("iframe").size()) {
                	$(".page-iframe").attr("ischecked","N");
                    //currentTab.find("iframe").attr("src", currentTab.find("iframe").attr("bsrc"));//每次打开都是最新的
                    currentTab.find("iframe").attr("ischecked", "Y");
                }

                $('.pf-sider:visible').find('.sider-nav-s li').removeClass('active');
                $('.pf-sider:visible').find('.sider-nav-s li[text=' + title + ']').addClass('active');
            }
        });

        $tabs.find('.tabs-header').on('contextmenu',
        function(e) {
            e.preventDefault();
            if ($(e.target).closest('li').size() > 0 || $(e.target).is('li')) {
                $('#mm').menu('show', {
                    left: e.pageX,
                    top: e.pageY,
                });
                var subtitle = $(e.target).closest('li').size() ? $(e.target).closest('li') : $(e.target);
                $('#mm').data("currtab", subtitle.text());
            }
        })
    }

};
mainPlatform.init();