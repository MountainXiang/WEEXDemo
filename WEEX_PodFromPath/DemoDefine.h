/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>

//#define CURRENT_IP @"your computer device ip"
#define CURRENT_IP @"192.168.1.108"

#if TARGET_IPHONE_SIMULATOR
    #define DEMO_HOST @"127.0.0.1"//Mac访问自己的地址
#else
    #define DEMO_HOST CURRENT_IP
#endif

#define DEMO_URL(path) [NSString stringWithFormat:@"http://%@:12580/%s", DEMO_HOST, #path]

#define HOME_URL [NSString stringWithFormat:@"http://%@:12580/examples/build/index.js", DEMO_HOST]

//修改.js文件名称即可(命名不能为Main.js不论大小写!!!可能有特殊含义。。。)
#define BUNDLE_URL [NSString stringWithFormat:@"file://%@/stream-demo.js",[NSBundle mainBundle].bundlePath]

#define UITEST_HOME_URL @"http://test?_wx_tpl=http://localhost:12580/test/build/TC__Home.js"

#define QRSCAN  @"com.taobao.WeexDemo.scan"
#define WEEX_COLOR [UIColor colorWithRed:0.27 green:0.71 blue:0.94 alpha:1]
