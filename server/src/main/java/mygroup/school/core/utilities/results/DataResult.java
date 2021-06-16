package mygroup.school.core.utilities.results;

public class DataResult<T> extends Result {

	T data;
	
	public DataResult(T data, boolean success, String message) {
		super(success, message);
		this.data = data;
	}
	
	public DataResult(T data, boolean success) { //mesaj geçmek zorunda olmadığımız için mesajsız constructor yazdık
		super(success);
		this.data = data;
	}
	
	public T getData(){
		return this.data;
	}

}
