function Node(data){
	this.data = data;
	this.next = null;
	this.pre = null;
}

function CycleLinkedlist(arr){
	this.head = null;
	this.size = 0;
	var tempNode = null;

	this.insert = function(data){
		if(this.size == 0){
			this.head = new Node(data);
		}else{
			tempNode = new Node(data);
			tempNode.pre = this.head.pre||this.head;
			tempNode.next = this.head;
			if(this.head.pre){
				this.head.pre.next = tempNode;
			}else{
				this.head.next = tempNode;
			}
			this.head.pre = tempNode;
		}
		this.size += 1;
		return; 
	}

	this.initInsert = function(arr){
		for(var i = 0;i < arr.length; i++){
			this.insert(arr[i]);
		}
	}
	if(arr){
		this.initInsert(arr);
	}

	//pos从0计起
	this.delete = function(pos){
		if(pos >= this.size || pos < 0)
			return false;
		tempNode = this.head;
		this.size -= 1;
		if(pos == 0){
			tempNode.pre.next = tempNode.next;
			tempNode.next.pre = tempNode.pre;
			this.head = tempNode.next;
			return tempNode;
		}
		for(var i = 0;i < pos-1;i++){
			tempNode = tempNode.next;
		}
		var delNode = tempNode.next;
		tempNode.next = tempNode.next.next;
		tempNode.next.pre = tempNode;
		return delNode;
	}

	this.getData = function(pos){
		if(pos >= this.size || pos < 0 || typeof(pos) != "number")
			return false;
		tempNode = this.head;
		for(var i = 0;i < pos;i++){
			tempNode = tempNode.next;
		}
		return tempNode;
	}

	this.output = function(){
		tempNode = this.head;
		for(var i = 0;i < this.size; i++){
			console.log(tempNode.data);
			tempNode = tempNode.next;
		}
	}

	//反向输出链表
	this.reversOutput = function(){
		tempNode = this.getData(this.size-1);
		while(tempNode != undefined){
			console.log(tempNode.data);
			tempNode = tempNode.pre;
		}
	}

}