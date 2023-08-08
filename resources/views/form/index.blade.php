<x-layout>
    @if(session()->has('message'))
        <div x-data="{show: true}" x-init="setTimeout(()=>show = false, 3000)" x-show="show" >
            <h1 style="color:aquamarine; text-align:center" > {{session('message')}} </h1>
        </div>
    @endif
    <div class="container">
        <div class="signup-content">
            <div class="signup-img">
                <img src="img/bg.jpeg" alt="">
            </div>
            <div class="signup-form">
                <form method="POST" action="/form/register" class="register-form need-validation" id="register-form" novalidate>
                    @csrf
                    <div class="form-row">
                        <div class="form-group">
                            <div class="form-input">
                                <label for="first_name" class="required">First name</label>
                                <input type="text" name="first_name" id="first_name" placeholder="Ex: John..." minlength="3" maxlength="15" pattern=".{3,15}" required />
                                
                                <p id="invalid_FirstName" style="color: red"></p>
                                @error('first_name')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                            <div class="form-input">
                                <label for="last_name" class="required">Last name</label>
                                <input type="text" name="last_name" id="last_name" placeholder="Ex: Doe..." minlength="3" maxlength="15" pattern=".{3,15}" required />
                                
                                <p id="invalid_LastName" style="color: red"></p>
                                @error('last_name')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                            <div class="form-input">
                                <label for="company" class="required">Company</label>
                                <input type="text" name="company" id="company" placeholder="Ex: Techcompany..." minlength="3" maxlength="50" pattern=".{3,50}" required />
                                
                                <p id="invalid_Company" style="color: red"></p>
                                @error('company')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                            <div class="form-input">
                                <label for="email" class="required">Email</label>
                                <input type="email" name="email" id="email" placeholder="Ex: email@email.com" required />

                                <p id="invalid_Email" style="color: red"></p>
                                @error('email')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                            <div class="form-input">
                                <label for="phone_number" class="required">Phone number</label>
                                <input type="text" name="phone_number" id="phone_number" placeholder="Ex: 0123456789" minlength="10" pattern=".{10,}" required />

                                <p id="invalid_PhoneNumber" style="color: red"></p>
                                @error('phone_number')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-select">
                                <div class="label-flex">
                                    <label for="meal_preference" class="required">Gender</label>
                                </div>
                                <div class="select-list">
                                    <select name="meal_preference" id="meal_preference">
                                        <option value="Vegetarian">&nbsp;</option>
                                        <option value="Kosher">Male</option>
                                        <option value="Asian Vegetarian">Female</option>
                                    </select>
                                </div>
                                <input type="hidden" name="meal_preference" id="gender" />

                                <p id="invalid_Gender" style="color: red"></p>
                                @error('meal_preference')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                            <div class="form-radio">
                                <div class="label-flex">
                                    <label for="payment" class="required">Payment Mode</label>
                                </div>
                                <div class="form-radio-group">
                                    <div class="form-radio-item">
                                        <input type="radio" name="payment" id="cash" value="Visa" checked>
                                        <label for="cash">Visa</label>
                                        <span class="check"></span>
                                    </div>
                                    <div class="form-radio-item">
                                        <input type="radio" name="payment" id="cheque" value="Mastercard">
                                        <label for="cheque">Mastercard</label>
                                        <span class="check"></span>
                                    </div>
                                    <div class="form-radio-item">
                                        <input type="radio" name="payment" id="demand" value="Amex">
                                        <label for="demand">Amex</label>
                                        <span class="check"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-input">
                                <label for="chequeno" class="required">Card Number</label>
                                <input type="text" name="chequeno" id="chequeno" placeholder="Ex: 123123123123" maxlength="16" pattern=".{16,16}" required />

                                <p id="invalid_CardNumber" style="color: red"></p>
                                @error('chequeno')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                            <div class="form-input">
                                <label for="blank_name" class="required">Expiration</label>
                                <input type="month" name="blank_name" id="blank_name" required />

                                <p id="invalid_Expiration" style="color: red"></p>
                                @error('blank_name')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                            <div class="form-input">
                                <label for="payable" class="required">CVN</label>
                                <input type="text" name="payable" id="payable" placeholder="Ex: 789" maxlength="3" pattern=".{3,3}" required />

                                <p id="invalid_CVN" style="color: red"></p>
                                @error('payable')
                                    <p style="color: red">{{$message}}</p>
                                @enderror

                            </div>
                        </div>
                    </div>
                    <div class="donate-us">
                        <label class="required">Donate us</label>
                        <input type="hidden" name="value_lower" id="value_lower" />
                        <div class="price_slider ui-slider ui-slider-horizontal">
                            <div id="slider-margin"></div>
                            <span class="donate-value" id="value-lower"></span>
                        </div>
                    </div>
                    <div class="form-submit">
                        <input type="submit" value="Submit" class="submit" id="submit" name="submit" />
                        <input type="button" value="Reset" class="submit" id="reset" name="reset" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-layout>