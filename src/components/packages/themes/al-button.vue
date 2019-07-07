<template>
    <button class="al-button" 
        :class="[computedType, computedSize, computedColor]" 
        @click="$emit('click', $event)">
        <i v-if='icon' :class="['fa', icon]"></i>
        {{text || '确认'}}
    </button>
</template>
<script>

/**
 * Author: Alex(https://github.com/zlalex);
 * ConContact: zhouliang1006@126.com
 * (c) 2017 - 2018 by Nanjing 
 * @param text: 按钮文本，默认 ‘确认’ 两字；
 * @param type: 按钮风格，默认 ‘实心矩形’，可选['outline', 'capsule', 'outCapsule']；
 * @param size: 按钮大小，默认 ‘small’，可选['tiny', 'large', 'full']；
 * @param color: 按钮颜色，默认 ‘default’，可选[‘danger’, 'success', 'warn', 'error']；
 */ 
export default {
    name: 'al-button',
    props: ['text', 'type', 'size', 'color', 'icon'],
    data(){
        return {
            classes: 'al-button'
        }
    },
    computed: {
        computedType: function(){
            return !this.type ? '' : `al-btn__${this.type}`;
        },
        computedSize: function(){
            return !this.size ? '' : `al-btn__${this.size}`;
        },
        computedColor: function(){
            return !this.color ? 'al-btn__default' : `al-btn__${this.color}`;
        }
    }
}
</script>

