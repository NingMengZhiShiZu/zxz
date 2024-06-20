document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    // 阻止表单的默认提交行为，并改为使用Ajax发送数据
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止默认提交
        if (!validateForm(event)) return;

        // 获取表单数据
        const formData = new FormData(form);

        // 将FormData转换为JSON对象（如果后端需要JSON格式）
        const jsonData = {};
        for (let [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        // 使用Fetch API发送POST请求到后端
        fetch('http://localhost:3000/', { // 替换为你的后端接口地址
            method: 'POST',
            body: JSON.stringify(jsonData) // 发送JSON格式的数据
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok ${response.statusText}`);
            }
            return response.json(); // 如果后端有响应，这里可以处理
        })
        .then(data => {
            console.log('成功:', data);
            alert('表单提交成功！');
            // 可以在这里重置表单或执行其他操作
        })
        .catch(error => {
            console.error('错误:', error);
            alert('表单提交失败，请稍后再试！');
        });
    });
});
function validateForm(event) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // 姓名验证：确保姓名非空
    if (!name.trim()) {
        alert("姓名不能为空。");
        event.preventDefault();
        return false;
    }

    // 电话验证：简单示例，确保电话号码非空且只包含数字
    const phonePattern = /^\d{11}$/;
    if (!phone || !phonePattern.test(phone)) {
        alert("电话号码必须为11位数字。");
        event.preventDefault();
        return false;
    }

    // 邮箱验证：使用正则表达式进行基本的格式验证
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        alert("请输入有效的电子邮件地址。");
        event.preventDefault();
        return false;
    }

    return true; // 所有验证通过
}