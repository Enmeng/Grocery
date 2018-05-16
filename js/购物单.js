var selectState = false;  
  // 全选或者全取消  
  function AllCheck(thisform)  
  {  
    for (var i = 0; i < thisform.elements.length; i++)  
    {  
      // 提取控件    
      var checkbox = thisform.elements[i];  
      checkbox.checked = !selectState;  
    }  
    selectState = !selectState;  
  }  
  
  // 反选  
  function ChangeCheck(thisform)  
  {  
    // 遍历 form    
    for (var i = 0; i < thisform.elements.length; i++)  
    {  
      // 提取控件    
      var checkbox = thisform.elements[i];  
      // 检查是否是指定的控件    
      if (checkbox.name === "groupCheckbox" && checkbox.type === "checkbox" && checkbox.checked === false)  
      {  
        // 正选    
        checkbox.checked = true;  
      }  
      else if (checkbox.name === "groupCheckbox" && checkbox.type === "checkbox" && checkbox.checked === true)  
      {  
        // 反选    
        checkbox.checked = false;  
      }  
    }  
  }  
