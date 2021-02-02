
    //Camera Authentication
    var ip_address1 = "158.108.122.4"
    var ip_address2 = "158.108.122.5"
    var ip_address3 = "158.108.122.6"
    var ip_address4 = "158.108.122.7"

    //camera username and password
    var username = "admin";
    var password="kusrc12345";

    //A channel of camera stream
    Stream = require('node-rtsp-stream');
    stream1 = new Stream({
        streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address1 +':554/stream',
  //       width: 720,
  //       height: 405,
        // fps: '10',
        // kbs: '720k',
        wsPort: 8887    
    });
  
    stream2 = new Stream({
        streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address2 +':554/stream',
  //       width: 720,
  //       height: 405,
		// fps: '10',
		// kbs: '720k',
        wsPort: 8888    
    });
    stream3 = new Stream({
        streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address3 +':554/stream',
  //       width: 720,
  //       height: 405,
		// fps: '10',
		// kbs: '720k',
        wsPort: 8889    
    });
    stream4 = new Stream({
        streamUrl: 'rtsp://' + username + ':' + password + '@' + ip_address4 +':554/stream',
  //       width: 720,
  //       height: 405,
        // fps: '10',
        // kbs: '720k',
        wsPort: 8890    
    });

    
